import React from 'react';

function Output(props) {
    const { paragraphs, includeHtml, tag } = props;

    return (
        <div className="output">
            {includeHtml === "Yes" ? (
                <p>{paragraphs.map(sentence => `<${tag}>${sentence}</${tag}>`)}</p>
            ) : (
                <p>{paragraphs.map((sentence) => sentence)}</p>
            )}
        </div>
    )
}

export default Output;
