import styles from "./immigrants-map.module.css";
import {Viewer} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfContainer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const url = "/pdf/immigrants-map.pdf";

    return (
        <div className={styles.pdfContainer}>
            <Viewer
                fileUrl={url}
                plugins={[defaultLayoutPluginInstance]}
            />
        </div>
    );
}