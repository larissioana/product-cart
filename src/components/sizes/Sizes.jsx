import './sizes.css'

const Sizes = ({ size, handleSize }) => {
    return (
        <div className="size-table">
            <p onClick={() => handleSize(size)}>{size}</p>
        </div>
    )
}

export default Sizes
