function List(props){
    const itemObj = props.obj;
    const title = props.objName; 

    const mappedobj = itemObj.map(item => <li key={item.id}>{item.name} <strong>{item.version}</strong></li>);

    const filteredObj = itemObj.filter(item => item.version > 10).map(item => <li key={item.id}>{item.name} <strong>{item.version}</strong></li>);

    return(
        <>
            <h3 className="list-category">{title}</h3>
            <ol className="list-items">{mappedobj}</ol>

            <h3 className="list-category">filtered {title}</h3>
            <ol className="list-items">{filteredObj}</ol>
        </>
    );
}
export default List