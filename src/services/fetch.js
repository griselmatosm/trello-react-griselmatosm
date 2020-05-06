const getDataFromJson = () => 
 fetch('./board.json')
    .then((response) => response.text())
    .then((data) => {
      let lists = [];
      lists = data.board.list
      return lists;    
    });

export { getDataFromJson };
