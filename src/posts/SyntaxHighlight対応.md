---
id: 2
title: Syntax Highlightに対応した！
date: '2024-06-30.6:20'
---

タイトルのとおりです。
本来であれば、最初から対応しろと思われるかもですが、今更対応しました。

シンタックスハイライトには、[Shiki.js](https://shiki.style)を使用しています。

いくつかのサンプルコードを記載してみます。

- C++

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}
```

- Java

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

- Python

```python
def hello_world():
    print("Hello, world!")
```

- TS

```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

- Ruby

```ruby
def hello_world
    puts "Hello, World!"
end
```

- Shell

```shell
echo "Hello, World!"
```
