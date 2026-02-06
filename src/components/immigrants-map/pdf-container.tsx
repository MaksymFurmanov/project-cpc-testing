import styles from "./immigrants-map.module.css";

export default function PdfContainer() {
    return (
        <div className={styles.pdfContainer}>
            <iframe
                src="/pdf/immigrants-map.pdf"
                className={styles.pdf}
                title="PDF viewer"
            />
        </div>
    );
}