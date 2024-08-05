import styles from './Styles.module.css';

export default function Background({children}) {
    return(
        <div className={styles.container}>
            {children}

            </div>
    )
}