var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
  ];
  
function organizeItems(items) {
    const organizedList = {
      fruit: [],
      canned: [],
      frozen: []
    };
  
    items.forEach((item) => {
      if (items.category === 'fruit') {
          organizedList.fruit.push(items.itemName);
        } else if (items.category === 'canned') {
          organizedList.canned.push(items.itemName);
        } else if (items.category === 'frozen') {
          organizedList.frozen.push(items.itemName);
        }
      });
    return organizedList;
  };
  console.log(organizeItems(itemData));