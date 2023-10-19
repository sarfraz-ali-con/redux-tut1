
import { useSelector, useDispatch } from 'react-redux';
import purchaseBook from '../service/actions/action';
function Component() {
    const totalBooks = useSelector(state => state.NumberofBooks);
    const dispatch = useDispatch();

    return (
        <>
            <div>Component</div>
            <h1>Books: {totalBooks}</h1>
            <button onClick={()=>{dispatch(purchaseBook())}}>Buy Book</button>
        </>
    );
}

export default Component;
