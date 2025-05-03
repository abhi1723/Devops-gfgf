import Child from "./Child";

function Parent(props) {
    const {parentName, childName} = props;
    return (
        <div>
            Parent name: {parentName}
            <Child childName = {childName}/>
        </div>
    )
}

export default Parent;