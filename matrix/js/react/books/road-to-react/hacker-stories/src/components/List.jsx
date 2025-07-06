function Item({ item, onRemoveItem }) {
  return (
    <li>
      <a href={item.url}>{item.title}</a>
      {` - ${item.author} ${item.num_comments} ${item.points} `}
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
