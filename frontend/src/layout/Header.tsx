import { jsx } from "@emotion/core";
import React from "react";


type Props = {
    gridArea: string,
};

export const Header: React.FC<Props> = ({ gridArea }) => {
    return (
        <div css={{
            gridArea,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderBottom: "2px solid #555",
            padding: "0 8px",
        }}>
            <Logo />
            <Search />
            <Menu />
        </div>
    );
};

const Logo: React.FC = () => (
    <a href="/" css={{ height: "100%" }}>
        <img
            src="static/logo-large.svg"
            css={{ height: "100%", padding: "4px 0", }}
        />
    </a>
);

const Search: React.FC = () => (
    <input type="text" placeholder="Search" />
);

const Menu: React.FC = () => (
    // TODO: carret down
    <div>Not logged in</div>
);