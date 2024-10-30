---
id: 4
title: NeoVimたのしいかも
date: '2024-10-30.23:40'
---


元々はVSCodeをよく使っていたのですが、最近、[Neovim](https://neovim.io/)を使い始めてて、
ようやく馴染んできたのか楽しくなってきました。

↓この記事書いてる時の様子
![NeoVimの画面](https://dl.kiharu.dev/Screenshot%202024-10-30%20at%2010.53.09%E2%80%AFPM.png)


まだまだVimmerと自称できるには程遠いとは思うけど、自分なりの楽しみを見つけれて嬉しいです！

今はVSCodeとNeoVimで7:3くらいの割合で使い分けているのですが、ちょっとずつNeoVimの割合を増やしていきたいです。

拡張機能の管理に[vim-plug](https://github.com/junegunn/vim-plug)を使っていて、
LSPの設定に[coc.nvim](https://github.com/neoclide/coc.nvim)、ファイラーには[fern](https://github.com/lambdalisue/vim-fern)
ファジーファインダーとして[telescope](https://github.com/nvim-telescope/telescope.nvim)を用いています。

何かあっても自分でどうにかできる気がしないので、おおよそメジャーなものを使っていますが、使用感には十分満足しています。

これを読んだ、まだVim/Neovimを知らないあなた！一緒にやりましょう楽しいですよ(勧誘)!!!!


誰得ではありますが、以下`init.vim`を添付しときます。あとGitHubのリンクも。

いろんなところからコピペしてきたようなコードなので、参考にはしないでください。
あと、全然間違えていると思います。許してね。 bye~👋

```vim
set encoding=utf-8
set number
let g:fern#renderer = 'nerdfont'
set tabstop=2
set shiftwidth=2
set expandtab
set nowrap
let g:loaded_perl_provider = 0

" vim-plug
call plug#begin()

" List your plugins here
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'itchyny/lightline.vim'

" ステータスライン
Plug 'nvim-lualine/lualine.nvim'
Plug 'nvim-tree/nvim-web-devicons'

" カラースキーム
Plug 'folke/tokyonight.nvim'
Plug 'morhetz/gruvbox'

" ファイラー
Plug 'lambdalisue/fern.vim'
Plug 'lambdalisue/fern-git-status.vim'
Plug 'lambdalisue/nerdfont.vim'
Plug 'lambdalisue/fern-renderer-nerdfont.vim'
Plug 'lambdalisue/glyph-palette.vim'

Plug 'shellRaining/hlchunk.nvim'
Plug 'dinhhuy258/git.nvim'

" ruby and rails
Plug 'dense-analysis/ale'
Plug 'tpope/vim-rails'
Plug 'tpope/vim-surround'
Plug 'tpope/vim-endwise'
Plug 'tpope/vim-surround'

" コードのドキュメント表示
Plug 'nvimdev/lspsaga.nvim'

" テレスコープ
Plug 'nvim-lua/plenary.nvim'
Plug 'nvim-telescope/telescope.nvim'
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}

" ウィンドウサイズ変更
Plug 'simeji/winresizer'

" git blame
" Plug 'FabijanZulj/blame.nvim'
Plug 'APZelos/blamer.nvim'
call plug#end()

" エラーなどのハイライト
highlight CocErrorSign ctermfg=15 ctermbg=196
highlight CocWarningSign ctermfg=0 ctermbg=172


" カラースキーム
colorscheme gruvbox
set background=dark

" GitBlameを初期有効化
let g:blamer_enabled = 1
let g:blamer_delay = 300

" fernの設定
" アイコンに色をつける
" ステータスラインの設定
lua << END
require('lualine').setup({
  options = {
    theme = 'tokyonight',
    section_separators = {'', ''},
    component_separators = {'', ''},
  },
  sections = {
    lualine_a = {'mode'},
    lualine_b = {'branch'},
    lualine_c = {'filename'},
    lualine_x = {'encoding', 'fileformat', 'filetype'},
    lualine_y = {'progress'},
    lualine_z = {'location'}
  },
})
END
" hlchunkの設定 "
lua << END
  require('hlchunk').setup({
    chunk = {
      enable = true,
      use_treesitter = true,
      style = "#00ffff",
      chars = {
        horizontal_line = "─",
        vertical_line = "│",
        left_top = "┌",
        left_bottom = "└",
        right_arrow = "─",
      },
      priority = 30
    },
    indent = {
      enable = true,
        chars = {
        "│",
        "¦",
        "┆",
        "┊",
      },
      style = {
        vim.fn.synIDattr(vim.fn.synIDtrans(vim.fn.hlID("Whitespace")), "fg", "gui"),
      },
    },
    line_num = {
      enable = true,
      style = {
        "#806d9c",
      },
    },
  })
END

lua << END
require('git').setup({
  signs = {
    add          = {hl = 'GitSignAdd', text = '▋'},
    change       = {hl = 'GitSignChange', text = '▋'},
    delete       = {hl = 'GitSignDelete', text = '▋'},
    topdelete    = {hl = 'GitSignDelete', text = '▔'},
    changedelete = {hl = 'GitSignChange', text = '▎'},
  },
  keymaps = {
    noremap = true,
    buffer = true,
    ['n ]g'] = {
      expr = true,
      "&diff ? ']g' : '<cmd>lua require\"git\".next_hunk()<CR>'"
    },
    ['n [g'] = {
      expr = true,
      "&diff ? '[g' : '<cmd>lua require\"git\".prev_hunk()<CR>'"
    },
  },
})
END
" 以下ショートカット

"ノーマルモードで
"スペース2回でCocList
nmap <silent> <space><space> :<C-u>CocList<cr>
"スペースhでHover
nmap <silent> <space>h :<C-u>call CocAction('doHover')<cr>
"スペースdfでDefinition "
nmap <silent> <space>df <Plug>(coc-definition)
"スペースrfでReferences
nmap <silent> <space>rf <Plug>(coc-references)
"スペースrnでRename
nmap <silent> <space>rn <Plug>(coc-rename)
"スペースfmtでFormat
nmap <silent> <space>fmt <Plug>(coc-format)
"スペースeでファイルツリー(fern)
nmap <silent> <space>e :Fern . -drawer -toggle -reveal=%<cr>
"C-t で新規タブを開く "
nmap <silent> <C-t> :tabnew<cr>
"C-tab で1つ右のタブを開く
nmap <silent> <C-tab> :tabnext<cr>
"C-S-tab で1つ左のタブを開く
nmap <silent> <C-S-tab> :tabprevious<cr>
"C-cでタブを閉じる
nmap <silent> <C-c> :tabclose<cr>
" スペースtで下にターミナルを開く
nmap <silent> <space>t :below terminal<cr>
" terminalモードでもctrl+wでノーマルモードに戻る
tnoremap <C-w> <C-\><C-n>
" ファイルツリーからファイルを右に開く
nmap <silent> <space>o :Fern %:h -drawer -reveal=%<cr>
" ターミナルを新しいタブで開く
nmap <silent> <space>T :tab terminal<cr>
" スペースbで横にターミナルを開く
nmap <silent> <space>b :rightbelow terminal<cr>

" Telescope
" ファイル検索
nnoremap <space>ff <cmd>Telescope find_files<cr>
nnoremap <space>fg <cmd>Telescope live_grep<cr>
nnoremap <space>fb <cmd>Telescope buffers<cr>
nnoremap <space>fh <cmd>Telescope help_tags<cr>

inoremap <silent><expr> <CR> coc#pum#visible() ? coc#pum#confirm() : "\<CR>"
```

:wq
