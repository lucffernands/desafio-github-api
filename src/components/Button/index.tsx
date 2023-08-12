import "../../index.css";

type Props = {
    Title: string;
};

export default function Button({ Title }: Props) {
    return (
        <button id="button-blue" type="submit">
            {Title}
        </button>
    );
}