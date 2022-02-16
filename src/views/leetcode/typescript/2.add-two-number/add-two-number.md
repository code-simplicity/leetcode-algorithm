# 两数相加

## 题目描述

给你两个`非空`的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储`一位`数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0开头。

## 示例

![链表图](https://raw.githubusercontent.com/dpy0912/PicGo/main/images/Roaming/picgo/2022/01/02/14a6aac9bf5c7251383d4cd22a41dc2f-20220102185508-c217c7.png)

```ts
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

## 代码实现

### 思路

首先每一位相加，如果超过约定的**每个节点只能存储`一位`数字**就会发生进位，发生进位我们使用`carry`表示，进位最大是`1`，因为即使是两个链表按位加，最大也就是`19`，也就是前面一位产生进位，而链表当前位置的值都是`9`。

首先声明一个链表`ListNode`，存储具体的值和节点，然后通过构造器设置值。实现原理就是对依次遍历两个了链表的相同节点的`val`值，然后与初始化的进位值`carry = 0`进行加法运算，结果和`10`做取余运算，然后进行下一个节点的计算，直到链表为`null`。

```ts
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function addTwoNumbers (l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let tail = dummyHead;
    let carry = 0;
    while (l1 && l2) {
        const sum = carry + l1.val + l2.val;
        const digit = sum % 10;
        const node = new ListNode(digit);
        tail.next = node;
        tail = node;
        carry = (sum - digit) / 10;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1) {
        const sum = carry + l1.val;
        const digit = sum % 10;
        const node = new ListNode(digit);
        tail.next = node;
        tail = node;
        carry = (sum - digit) / 10;
        l1 = l1.next;
    }
    while (l2) {
        const sum = carry + l2.val;
        const digit = sum % 10;
        const node = new ListNode(digit);
        tail.next = node;
        tail = node;
        carry = (sum - digit) / 10;
        l2 = l2.next;
    }
    if (carry) {
        const node = new ListNode(carry);
        tail.next = node;
    }

    return dummyHead.next;
}
```

时间复杂度：`O(max(m,n))`，m 和 n 代表 l1 和 l2 的长度。

空间复杂度`O(max(m,n))`。