# Reviews

点击按钮可以查看下一个或前一个评论，点击随机按钮可以查看随机的评论。

## Step

1. 将数据作为 Object 数组导入项目
2. 用 `useState` 存储导入的数据
3. 用 `name`, `image`, `job`, `text` 属性展示第一个 Review (数组索引为0)
4. 设置按钮来展示下一个或前一个评论，在用户点击按钮时更新数组当前的索引。当索引超出了数组长度时，将索引设置为 0，展示第一个评论；当索引小于0时，将索引设置为数组的最后一个索引。
5. 设置按钮来展示随机的评论，生成随机的索引数，展示对应的 reviews。

## Number Check

### Newbie Way
```jsx
const prevReview = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      return reviews.length - 1;
    }
    return newIndex;
  });
};

const nextReview = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex + 1;
    if (newIndex > reviews.length - 1) {
      return 0;
    }
    return newIndex;
  });
};
```

### Function Way

```jsx
const checkNumber = (number) => {
  if (number < 0) {
    return reviews.length - 1;
  }
  if (number > reviews.length - 1) {
    return 0;
  }
  return number;
}

const prevReview = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex - 1;
    return checkNumber(newIndex);
  });
};

const nextReview = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex + 1;
    return checkNumber(newIndex);
  });
};
```