import styled from 'styled-components';

const themeStyles = (color) => `
  --color-sidebar-background-default: ${
    color === 'light'
      ? 'var(--color-sidebar-background-light-default)'
      : 'var(--color-sidebar-background-dark-default)'
  };
  --color-sidebar-background-hover: ${
    color === 'light'
      ? 'var(--color-sidebar-background-light-hover)'
      : 'var(--color-sidebar-background-dark-hover)'
  };
  --color-sidebar-background-active: ${
    color === 'light'
      ? 'var(--color-sidebar-background-light-active)'
      : 'var(--color-sidebar-background-dark-active)'
  };
  --color-text-default: ${
    color === 'light'
      ? 'var(--color-text-light-default)'
      : 'var(--color-text-dark-default)'
  };
  --color-text-hover: ${
    color === 'light'
      ? 'var(--color-text-light-hover)'
      : 'var(--color-text-dark-hover)'
  };
  --color-text-active: ${
    color === 'light'
      ? 'var(--color-text-light-active)'
      : 'var(--color-text-dark-active)'
  };
  --color-text-logo-default: ${
    color === 'light'
      ? 'var(--color-text-logo-light-default)'
      : 'var(--color-text-logo-dark-default)'
  };
   --color-button-background-default: ${
    color === 'light'
      ? 'var( --color-button-background-light-default)'
      : 'var( --color-button-background-dark-default)'
  };
   --color-button-background-active: ${
    color === 'light'
      ? 'var( --color-button-background-light-active)'
      : 'var( --color-button-background-dark-active)'
  };
 
`;


export const SidebarContainer = styled.div`
    ${({ color }) => themeStyles(color)};
    width: 90px;
    background-color:var(--color-sidebar-background-default);
    height: 650px;
    border: 4px solid var(--color-sidebar-background-active);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:10px;
    &.opened {
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        align-items: normal;
        width: 250px;
        border: 4px solid var(--color-sidebar-background-active);
        height: 650px;
        color: var(--color-text-default);
        background-color: var(--color-sidebar-background-default);
        border-radius: 15px;
        .logo-div {
            display: flex;
            flex-direction: row;
            padding: 20px 20px 20px 0;
            color: var(--color-text-logo-default);
            align-items: center;
            position: relative;
        }

        .logo-div img {
            width: 50px;
            height: 30px;
            cursor: pointer;
        }

        .logo-div span {
            cursor: pointer;
            font-weight: 600;
            font-size: 20px;
            margin-left: 10px;
        }

        .toggle-side-bar {
            position: absolute;
            right: -32px;
            height: 25px;
            width: 25px;
            background-color: var(--color-button-background-default);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #000;
            transition: background-color 0.3s linear;
        }

        .toggle-side-bar:active {
            background-color: var(--color-button-background-active);
        }

        > span {
            margin-top: 10px;
            height: 10px;
            width: 10px;
            background-color: #ec6a5e;
            border-radius: 50%;
            position: relative;
        }

        > span::before,
        > span::after {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
        }

        > span::before {
            background-color: #f5bf50;
            left: 20px;
        }

        > span::after {
            background-color: #61c554;
            left: -20px;
        }

        > div:nth-of-type(2) {
            padding: 20px 10px;
        }

        > div:nth-of-type(3) {
            margin-top: auto;
            padding: 20px 10px;
        }

        > div:nth-of-type(2) div,
        > div:nth-of-type(3) div {
            padding: 10px 10px;
            margin: 5px 0;
            border-radius: 15px;
            cursor: pointer;
            transition: background-color 0.3s linear, color 0.3s linear;
        }

        > div:nth-of-type(2) div:hover,
        > div:nth-of-type(3) div:hover {
            background-color: var(--color-sidebar-background-hover);
            color: var(--color-text-hover);
        }

        > div:nth-of-type(2) div:active,
        > div:nth-of-type(3) div:active {
            background-color: var(--color-sidebar-background-active);
            color: var(--color-text-active);
        }

        > div:nth-of-type(3) div svg {
            margin: 0 5px;
        }

        > div:nth-of-type(2) div span {
            margin-left: 5px;
            font-weight: 500;
        }


        .logo-div,
        .logo-div img,
        .logo-div span,
        .sidebar-item-container,
        .sidebar-item {
            display: block;
        }

        .sidebar-item {
            padding: 10px 10px;
            margin: 5px 0;
            border-radius: 15px;
            cursor: pointer;
            transition: background-color 0.3s linear, color 0.3s linear;

            &:hover {
                background-color: var(--color-sidebar-background-hover);
                color: var(--color-text-hover);
            }

            &:active {
                background-color: var(--color-sidebar-background-active);
                color: var(--color-text-active);
            }

            svg {
                margin: 0 5px;
            }

            span {
                margin-left: 5px;
                font-weight: 500;
            }
            
        }
    }
`;

export const SidebarToggle = styled.div`
    position: absolute;
    right: -32px;
    height: 25px;
    width: 25px;
    background-color: var(--color-button-background-default);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--color-text-default);
    transition: background-color 0.3s linear;
    &:active {
        background-color: var(--color-button-background-active);
    }
`;

export const SidebarLogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 20px 20px 0;
    color: var(--color-text-logo-default);
    align-items: center;
    position: relative;
`;

export const SidebarLogoImg = styled.img`
    width: 50px;
    height: 30px;
    cursor: pointer;
`;

export const SidebarLogoText = styled.span`
    cursor: pointer;
    font-weight: 600;
    font-size: 20px;
    margin-left: 10px;
`;

export const SidebarItemContainer = styled.div`
    padding: 20px 10px;
`;

export const SidebarItem = styled.div`
    padding: 10px;
    margin: 5px 0;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s linear, color 0.3s linear;

    &:hover {
        background-color: var(--color-sidebar-background-hover);
        color: var(--color-text-hover);
    }

    &:active {
        background-color: var(--color-sidebar-background-active);
        color: var(--color-text-active);
    }

    svg {
        margin: 0 5px;
    }

    span {
        margin-left: 5px;
        font-weight: 500;
    }

    &:last-of-type span::after {
        content: '';
        height: 6px;
        width: 6px;
        position: absolute;
        top: 12px;
        left: -11px;
        background-color: red;
        border-radius: 50%;
    }
`;

export const SidebarDot = styled.span`
    margin-left: 10px;
    width: 10px;
    height: 10px;
    background-color: #ec6a5e;
    border-radius: 50%;
    display: inline-block;
    position: relative;

    &::before,
    &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
    }

    &::before {
        background-color: #f5bf50;
        left: 20px;
    }

    &::after {
        background-color: #61c554;
        left: -20px;
    }
`;
export const SidebarIconWrapper = styled.div`
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    display: flex;
    color: var(--color-text-default);
    background-color: var(--color-sidebar-background-default);
    transition: background-color 0.3s linear , color 0.3s linear;
    border-radius:12px;
    position: relative;

    &:hover {
        background-color: var(--color-sidebar-background-hover);
        color: var(--color-text-hover);
    }

    &:active {
        background-color: var(--color-sidebar-background-active);
        color: var(--color-text-active);
    }
   

    svg {
        color: var(--color-icon-default);
        font-size: 20px;
    }
         
    &.closed:hover::after {
        content: attr(data-title);
        height: 20px;
        width: 70px;
        position: absolute;
        top: 50%;
        left: 98%;
        transform: translateY(-50%);
        background-color: #0023c4;
        color: #fff;
        border-radius: 14px;
        padding: 7px 12px;
        white-space: nowrap;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        align-items: center;
        display: flex;
        justify-content: center;    
    }
`;

