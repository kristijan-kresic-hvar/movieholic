import PropTypes from 'prop-types'

import styles from './FilterList.module.scss'

const FilterList = ({ children }) => {
    return (
        <div className={styles.filter_list}>
            {children}
        </div>
    )
}

FilterList.propTypes = {
    children: PropTypes.node.isRequired
}

export default FilterList