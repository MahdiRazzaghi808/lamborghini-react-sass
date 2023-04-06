import React from 'react'
import styles from "./newsItem.module.scss"

const NewsItem = ({ data }) => {
    return (
        <div className={styles.wrapper}>

            <div>
                <img src={data.image} alt="news" />
            </div>

            <div>
                <p>{data.date}</p>
                <h4>{data.title}</h4>
                <button>READ MORE</button>
            </div>

        </div>
    )
}

export default NewsItem
