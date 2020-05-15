const getDataFromJson = () => 
 fetch('./api/board.json')
    .then((response) => response.json())
    .then((data) => {
      let lists = [];
      lists = data.board.list
      return lists;    
    });

export default { getDataFromJson };
