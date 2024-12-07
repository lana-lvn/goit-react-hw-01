import clsx from "clsx";
import styles from "./transactionHistory.module.css"
const TransactionHistory = ({ items }) => {
    
    return <table className={styles.table}>
        <thead className={styles.tableHead}>
            <tr className={styles.tableHeadRow}>
                <th className={styles.tableHeadData}>Type</th>
                <th className={styles.tableHeadData}>Amount</th>
                <th className={styles.tableHeadData}>Currency</th>
            </tr>
        </thead>

        <tbody className={styles.tableBody}>
              
            {items.map((item) => (<tr key={item.id} className={styles.tableBodyRow}>
                {/* <td className={styles.tableBodyData}>{item.type}</td> */}
                <td className={clsx(styles.tableBodyData, styles.type)}>{item.type}</td>
                <td className={styles.tableBodyData}>{item.amount}</td>
                <td className={styles.tableBodyData}>{item.currency}</td>
            </tr>))
            }

        </tbody>
    </table>;
};

export default TransactionHistory;