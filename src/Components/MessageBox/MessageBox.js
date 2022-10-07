import './MessageBox.css'
import data from './data'

const MessageBox = ({ month }) => {
    return <div className='messageBoxDiv'>
        {data[month]}
    </div>
}

export default MessageBox;