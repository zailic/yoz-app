
export class BrowserDetect {

    static dataBrowser: BrowserInfoEntity[] = [
        {
            string: "PhantomJS",
            subString: "PhantomJS",
            identity: "PhantomJS",
            versionSearch: "PhantomJS"
        },
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {
            // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }];

    static dataOS:BrowserInfoEntity[] = [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ];

    public browser: string;
    public version: string;
    public OS: string;
    protected versionSearchString:string;

    constructor() {
        this.browser = this.searchString(BrowserDetect.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) ||
            this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(BrowserDetect.dataOS) || "an unknown OS";
    }

    public isIE8() {
        return (document.documentElement.hasAttribute("class"))
            && (document.documentElement.getAttribute("class") === "ie8");
    }
        
    /**
     * User for determining the browser and OS based on the input provided by the data param.
     * Also sets the versionSearchString parameter which would be used by
     * {@link mindspace.utils:BrowserDetect#searchVersion searchVersion}
     */
    protected searchString(data: BrowserInfoEntity[]) {
        for (let i = 0; i < data.length; i++) {
            let dataString = data[i].string,
                dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1) {
                    return data[i].identity;
                }
            }
            else if (dataProp) {
                return data[i].identity;
            }
        }
    }
    
    /**
     * User for determining the browser version based on input string
     */
    protected searchVersion(dataString: string) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) {
            return;
        }
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
}