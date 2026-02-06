import { useRef } from "react";
import styles from "./immigrants-map.module.css";

export default function PdfContainer() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const enterFullscreen = () => {
        if (wrapperRef.current?.requestFullscreen) {
            wrapperRef.current.requestFullscreen();
        }
    };

    return (
        <div className={styles.pdfContainer}>
            <button onClick={enterFullscreen} className={styles.fullscreenBtn}>
                Fullscreen
            </button>

            <div ref={wrapperRef} className={styles.viewer}>
                <iframe
                    src="/pdf/immigrants-map.pdf"
                    title="PDF viewer"
                    className={styles.pdf}
                />
            </div>
        </div>
    );
}