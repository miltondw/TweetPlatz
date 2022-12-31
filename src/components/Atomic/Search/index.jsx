import styles from './styles.module.scss'
import {TfiSearch} from 'react-icons/tfi'
export const Search = () => {
  return (
    <div className={styles.search}>
        <label className={styles.label}>
            <TfiSearch />
        <input type="text" className={styles.input} placeholder="Search Twitter" />
        </label>
    </div>
  )
}

