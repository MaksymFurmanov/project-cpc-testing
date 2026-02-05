import styles from "./immigrants-map-preview.module.css";
import {useTranslation} from "react-i18next";

export default function ImmigrantsMapPreview() {
    const {t} = useTranslation("home");

    return (
        <article>
            <h2>
                {t("immigrants-map-preview.title")}
            </h2>
            <img/>
        </article>
    );
}