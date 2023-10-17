import React from 'react';
import styles from '../../index.module.scss';

const Text = ()=>{
    return<div>
        <p className={styles.text}>Dark/Light</p>
        <p className={styles.text2}>Toggle dark or light to customize   yor interface</p>
    </div>
}
export default Text;