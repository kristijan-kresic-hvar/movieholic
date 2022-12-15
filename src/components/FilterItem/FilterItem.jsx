import PropTypes from 'prop-types'

import styles from './FilterItem.module.scss'

const FilterItem = ({ title, handleClick, isActive }) => {
    return (
        <div
            onClick={(e) => isActive ? e.preventDefault() : handleClick()}
            className={`${styles.filter_item} ${isActive ? styles.active : ''}`}
        >
            <p>{title}</p>
        </div>
    )
}

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default FilterItem