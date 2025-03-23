/*
    xtra (extra) lib (library) program
    auth: @Fries-Byte
    date of creation (written): 3/23/25
    language (used): TypeScript 5.8
*/
const fs = require("fs") /* "node_modules" IS REQUIRED FOR THIS IMPORT */
const path = require("path") /* "node_modules" IS REQUIRED FOR THIS IMPORT */
function xtralib(moduleName) { /* xtralib (Function) main program */
    /*
        reasoning for this:
        xtra (extra) librarys and making is more easier to use.
        I'd (@Fries-byte) recommend it for beginners for JavaScript or TypeScript projects.
        NOTE: THIS PROGRAM IS NOT BUG-FREE
        [repo:https://github.com/fries-byte/xtralib]

        information (section)
            @version 1.0
            @nameHitory nodeREQUIRE, requireNODE
                   ver: > 1 ------------------ 1
    */
    if (moduleName === "shortcuts") {
        return {
            // $: (...v) => {  }, unnecessary uses
            log: /* console.log => [console.]log */ (pa) => { console.log(pa) /* void */ } 
        };
    } else if (moduleName === "easyFile") { /* Library easyFile */
        class EasyFile {
            /*
                easyFile library for file creation and editing: reason for recommending beginners
                wFile is to create a !write file!, which is why it's called "wFile".

                how to use: to write or rewrite a file you'd use
                    easyfile.wFile("filename.txt", "content")
                
                You can also write in folder by adding a third argument
                    easyfile.wFile("foldername", "filename.txt", "content")

                For varaibles you'd you here for example
                    easyfile.wFile(foldervar, filevar, contentvar)

                information (section)
                    @version 1.0
                    @nameHitory easyFile
                           ver: 1 ---- 1
            */
            wFile(...args) { /* Write file function */
                const [folder, filename, content] = args.length === 2 ? [null, ...args] : args
                const filePath = folder ? path.join(folder, filename) : filename
                if (args.length === 3 && folder && !fs.existsSync(folder)) { fs.mkdirSync(folder, { recursive: true }) }
                fs.writeFileSync(filePath, content, "utf8")
                if (fs.existsSync(filename)) { console.log(`File edited: ${filePath}, with the content of: ${content}`) }
                else { console.log(`File created: ${filePath}`) }
            }
        }
        return new EasyFile();
    } else if (moduleName === "html") {
        /*
            html is used for website and so you can use the libaray 'html'
            "h" will be the labels for the html libaray
        */
       let content; $: (t: string, v: number, ...c: any) => { // TODO: lib.h("header", 1, "Welcome to My Webs \n\n SyntaxError: Invalid or unexpected token
            if (t === "header") {
                /*
                    headers for html.
                */
                for (let v = 1; v <= 6; v++) {
                    console.log(`\n<h${v}>${c}</h${v}>`);
                }
            }        
        content = v /**/
       }
       
       class html {
            
       }
    }
    return null;
}

module.exports = xtralib;