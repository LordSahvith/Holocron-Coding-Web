function Item({ item, onRemoveItem }) {
  return (
    <li>
      <a href={item.url}>{item.title}</a>
      {` - Author: ${item.author} -
      Comments: ${item.num_comments} -
      Points: ${item.points} `}
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </li>
  );
}

function List({ list, onRemoveItem }) {
  return (
    <ul>
      {list.map(item => {
        return (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        );
      })}
    </ul>
  );
}

export default List;
