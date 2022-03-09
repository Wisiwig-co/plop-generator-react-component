const component = {
    description: "⚛ react component",
    prompts: [
        {
            type: "input",
            name: "appName",
            message: "app name",
        },
        {
            type: "input",
            name: "num",
            message: "number of components",
        },
        {
            type: "input",
            name: "name",
            message: "component name"
        },
        {
            type: "input",
            //TODO: doesn't look like semicolons preserve from CLI arg
            name: "styles",
            message: "component styles"
        }
    ],
    actions: [
        {
            type: "genmulticomp",
            numComponents: "{{num}}"
        },
        {
            type: "addMany",
            destination: "src/components/{{ appName }}",
            templateFiles: `./templates/component/*.hbs`,
            verbose: true,
        },
        {
            type: "add",
            path: "src/components/{{ appName }}/Layout.tsx",
            templateFile: "./templates/container.hbs",
        },
        {
            type: "add",
            path: "src/components/{{ appName }}/ReadMe.md",
            templateFile: "./templates/readme.hbs",
        }
    ],
}

export default component
