import styles from "./immigrants-map.module.css";

export default function PdfContainer() {
    return (
        <div className={styles.pdfContainer}>
            <embed
                src={"/pdf/immigrants-map.pdf"}
                className={styles.pdf}
                type={"application/pdf"}
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}