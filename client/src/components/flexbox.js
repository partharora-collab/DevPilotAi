export function FlexBox({ className, children }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
        }} className={ className }>
            { children }
        </div>
    )
}

export function ColumnFlexBox({ className, children }) {
     return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%"
        }} className={ className }>
            { children }
        </div>
    )
}