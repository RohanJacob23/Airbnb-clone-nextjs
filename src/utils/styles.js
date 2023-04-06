import { rem, createStyles } from "@mantine/core";

function footerFun(theme) {
  const footerStyle = {
    footer: {
      marginTop: rem(120),
      paddingTop: `calc(${theme.spacing.xl} * 2)`,
      paddingBottom: `calc(${theme.spacing.xl} * 2)`,
      backgroundColor: "rgb(243 244 246)",
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[2]
      }`,
    },

    logo: {
      maxWidth: rem(200),

      [theme.fn.smallerThan("sm")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },

    description: {
      marginTop: rem(5),

      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
        textAlign: "center",
      },
    },

    inner: {
      display: "flex",
      justifyContent: "space-between",

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },

    groups: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",

      [theme.fn.smallerThan("sm")]: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "17px",
        textAlign: "center",
      },
    },

    wrapper: {
      width: rem(160),
    },

    link: {
      display: "block",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[6],
      fontSize: theme.fontSizes.sm,
      paddingTop: rem(3),
      paddingBottom: rem(3),

      "&:hover": {
        textDecoration: "underline",
      },
    },

    title: {
      fontSize: theme.fontSizes.lg,
      fontWeight: 700,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: `calc(${theme.spacing.xs} / 2)`,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },

    afterFooter: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
      },
    },

    social: {
      [theme.fn.smallerThan("sm")]: {
        marginTop: theme.spacing.xs,
      },
    },
  };
  return footerStyle;
}

export { footerFun };
