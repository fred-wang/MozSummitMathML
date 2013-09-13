MozSummitMathML
===============

Slides for the Innovation Fair of Mozilla Summit 2013

- Open [index.html](http://fred-wang.github.io/MozSummitMathML/index.html) in a Gecko browser.
- Press space to start the looping slideshow or pause it.
- Use left and right arrows to navigate between slides.

Additional resources:

  1. History: [Mozilla MathML Project Update](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Updates) ; [History of the Mozilla Project](https://www.mozilla.org/en-US/about/history/) ; [Mozilla mascot](https://en.wikipedia.org/wiki/Mozilla_%28mascot%29) ; [History of the World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web) ; [Introducing the Mozilla Science Lab](https://blog.mozilla.org/blog/2013/06/14/5992/)

  2. MathML demos ; install [math fonts](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Fonts) for best rendering.
     - MathML Start Page in various languages: [English](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Start), [Arabic](https://developer.mozilla.org/ar/docs/Mozilla_MathML_Project/Start), [Chinese](https://developer.mozilla.org/zh-CN/docs/Mozilla_MathML_Project/Start), [Hebrew](https://developer.mozilla.org/he/docs/Mozilla_MathML_Project/Start), [Thai](https://developer.mozilla.org/th/docs/Mozilla_MathML_Project/Start)
     - MathML Demos: [Basics](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/Basics), [Extras](https://developer.mozilla.org/fr/docs/Mozilla/MathML_Project/Extras), [Instiki](http://golem.ph.utexas.edu/wiki/instiki/show/Sandbox), [jquery-mathml](http://sdiehl.github.io/jquery-mathml/), [Jacques Distler's Blog](http://golem.ph.utexas.edu/~distler/blog/archives/002561.html)
     - MathML Tests: [Mozilla Torture Test](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project/MathML_Torture_Test), [Joe Java's test](https://eyeasme.com/Joe/MathML/MathML_browser_test), [MathML Acid Tests](https://github.com/fred-wang/AcidTestsMathML#mathml-acid-tests)
     - [arXMLiv Project](http://arxmliv.kwarc.info/): Pick one of the 658847
     output from 
    [No Problems](http://arxmliv.kwarc.info/retval_detail.php?retval=no_problems),  [Warning](http://arxmliv.kwarc.info/retval_detail.php?retval=warning) or
    [Missing Macros](http://arxmliv.kwarc.info/retval_detail.php?retval=missing_macros) or [Error](http://arxmliv.kwarc.info/retval_detail.php?retval=error) and open the xhtml file. Here I did it for you: [1206.7017](http://arxmliv.kwarc.info/files/1206/1206.7017/1206.7017.xhtml), [0704.1173](http://arxmliv.kwarc.info/files/0704/0704.1173/0704.1173.xhtml), [cond-mat.0611593](http://arxmliv.kwarc.info/files/0611/cond-mat.0611593/cond-mat.0611593.xhtml), [math.0211411](http://arxmliv.kwarc.info/files/0211/math.0211411/math.0211411.xhtml), [quant-ph.0102023](http://arxmliv.kwarc.info/files/0102/quant-ph.0102023/quant-ph.0102023.xhtml), [alg-geom.9202012](http://arxmliv.kwarc.info/files/9202/alg-geom.9202012/alg-geom.9202012.xhtml), [0804.2714](http://arxmliv.kwarc.info/files/0804/0804.2714/0804.2714.xhtml), [astro-ph.0409266](http://arxmliv.kwarc.info/files/0409/astro-ph.0409266/astro-ph.0409266.xhtml), [1206.7094](http://arxmliv.kwarc.info/files/1206/1206.7094/1206.7094.xhtml)... That gives a success rate of about 60% and
    a conversion of 95% of the arXMLiv LaTeX papers.
     - **Wikipedia**: Try a random math article like [Normal_distribution](https://en.wikipedia.org/wiki/Normal_distribution).
     Currently, PNG images are used for all
    anonymous users. If you want to enable MathJax in Wikipedia, you must create
    a user account. Once logged in, go to Preference → Appearance → Math and
    select "MathJax". By default, the MathJax HTML-CSS output is used. To select
    the Native MathML output, right click on a formula and select 
    Math Settings → Math Renderer → MathML. You may also try the SVG output. 

  3. MathML in Gecko applications
    - Firefox: See the demos above ;-)
    - [FireMath](http://www.firemath.info/): Install the
      [FireMath add-on](https://addons.mozilla.org/firefox/addon/firemath/)
      in Firefox. After restart, the editor is accessible from Tools → FireMath.
    - [EPUBReader](https://addons.mozilla.org/firefox/addon/epubreader/):
      Install the add-on and restart. You can import the 
      [linear-algebra example](http://code.google.com/p/epub-samples/wiki/SamplesListing#linear-algebra) and read it.
    - **Thunderbird**: See [Writing-mathematics-in-emails](http://www.maths-informatique-jeux.com/blog/frederic/?post/2012/11/14/Writing-mathematics-in-emails)
  and [MathML and ThunderBird](http://www.glazman.org/weblog/dotclear/index.php?post/2012/11/16/MathML-and-Thunderbird). In your preference, be sure
    that your mails are "sent as HTML". When writing an email, you can then use
    Insert → HTML to insert some MathML code. Of course, you probably don't want
    to do that by hand, so use one of the MathML authoring tools described
    below. For example, the
    [MathBird add-on](http://disruptive-innovations.com/zoo/MathBird/) is
    give you access to a menu Insert → MathML that opens an ASCIIMathML
    parser with preview. You can try to send your email to various mail clients
    to see how they handle the MathML equations.
    - [InstantBird](http://www.instantbird.com/): Install the
    [MathJax LaTeX](https://addons.instantbird.org/en-US/instantbird/addon/340)
    plugin. (Not tested, waiting Quentin's feedback on this)
    - [BlueGriffon](http://bluegriffon.org/): Buy and install the
    [MathML add-on](http://www.bluegriffon.com/index.php?pages/MathML). (Not
    tested)

  4. Authoring tools
     - For Gecko-based authoring tools: See above ;-)
     - **AsciiMathML**, **MathJax** and more. You can try the online demos
       to test the ASCII and LaTeX input:
       [AsciiMath](http://www1.chapman.edu/~jipsen/mathml/asciimathdemo.html) and
        [MathJax](http://cdn.mathjax.org/mathjax/latest/test/sample-dynamic.html).
        See
        [Client Side Conversion](https://developer.mozilla.org/en-US/docs/Web/MathML/Authoring#Client-side_Conversion) for quick hints on how to use them on            your pages.
     - itex2MML, **LaTeXML** and more: See [Command line Programs](https://developer.mozilla.org/en-US/docs/Web/MathML/Authoring#Command-line_Programs) for
       how to install and use them.
       itex2MML is used by instiki and you can play with the
       [Sandbox](http://golem.ph.utexas.edu/wiki/instiki/show/Sandbox).
       For LaTeXML, it is recommended to use the SVN version for now as the
       release is very old ; you can try the `LaTeXML/` directory on this
       repository for an example and various configurations.
       There is also an [online LaTeX editor](http://latexml.mathweb.org/editor)
       with on-the-fly preview.
     - By default, **LibreOffice** uses a "semi-WYSIWYG" editor that is, you
      enter a simple "StarMath" syntax and have access to a math preview and to
      an equation panel with predefined constructions.
      There is an experimental WYSIWYG
      editor that
      you can enable in "Tools → Options → Advanced → Experimental Features".
      LibreOffice has a standalone Formula Editor but you can also create
      formulas in a normal text document using
      "Insert → Object → Formula". You can convert this document into
      a Web page using "File → Export → XHTML". Note that the MathML code
      generated by LibreOffice is very bad at the moment but this will be
      improved in version 4.2.
     - **Handwriting Recognition**: Go to
       [webdemo.visionobjects](http://webdemo.visionobjects.com) and select
       "Web Equation". On recent Windows version, you can also try the
       "Math Input Panel" to transmit MathML to programs supporting the
       "MathML Clipboard Specification" (see getting involved below).
       Watch this video for the
       [Samsung Galaxy Note](https://www.youtube.com/watch?v=ksBWWpbsOk0)

  5. Future
    - MediaWiki.  Note: these are
        prototype and testing machine for development purpose, so you may
        experience some latency and meet other bugs.
       - Registered users can test Wikipedia with the experimental
         MathJax mode (see above).
       - For server-side TeX-to-MathML conversion via LaTeXML and
    Native MathML Gecko rendering, there is a WMFlabs instance here:
    [Discrete Fourier Transform](http://math-test2.instance-proxy.wmflabs.org/wiki/Discrete_Fourier_transform). Click
       "random page" if you want to read more articles.
       - You can also try a [Math Search](http://math-test2.instance-proxy.wmflabs.org/wiki/Special:MathSearch?pattern=\exp%28%3Fx+%2B+%3Fy%29).
    - MathJax:
       - MathJax 2.3 will add support for new Open Type Fonts. Clone
       [this GitHub branch](https://github.com/fred-wang/MathJax/tree/open-type-fonts) and try the `open-type-fonts.html` test on this repository.
      Right click on a formula and select 
      Math Settings → Font Preference to test Asana Math, Neo Euler,
      Latin Modern etc
      Note: be sure that open-type-fonts.html points to a local server
      (because of the [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Same_origin_policy_for_JavaScript)) and that the "unpacked"
      version of the open-type-fonts branch is used.
      - Benetch has a [prototype implementation of MathSpeak in MathJax](https://github.com/benetech/mathjax) (not tested). Other tools like ChromeVox or
      MathPlayer also have this feature. Mozilla had FireVox, but unfortunately
      it seems that it is no longer maintained and not compatible with the most
      recent version of Firefox (see getting involved below).
      Watch [Advancing Web Accessibility with ChromeVox](https://www.youtube.com/watch?v=YyWu9HB9QtU).
      - There have been a few improvements to WebKit MathML. Try a 
        [Nightly build](http://nightly.webkit.org) or check how
        to [build one of the port](http://trac.webkit.org/wiki#WebKitPorts).
        Two tracking bugs: [Basic Support](https://bugs.webkit.org/show_bug.cgi?id=99623) and [MathJax](https://bugs.webkit.org/show_bug.cgi?id=84019).
    - Getting involved:
      - Complete Gecko's MathML support ([bugs 534959](https://bugzilla.mozilla.org/show_bug.cgi?id=534959) and [525772](https://bugzilla.mozilla.org/show_bug.cgi?id=525772))
      - Fix issues that prevent Gecko's Native MathML from being the default in MathJax: [bug 687809](https://bugzilla.mozilla.org/show_bug.cgi?id=687809)
      - Improve Font Installation bugs [770005](https://bugzilla.mozilla.org/show_bug.cgi?id=770005), [467729](https://bugzilla.mozilla.org/show_bug.cgi?id=467729) and [648548](https://bugzilla.mozilla.org/show_bug.cgi?id=648548)
      - Add support for more Open Type Math fonts: [bug 407059](https://bugzilla.mozilla.org/show_bug.cgi?id=407059)
      - Make the [editor](http://dxr.mozilla.org/mozilla-central/source/editor) aware of MathML: [bug 78128](https://bugzilla.mozilla.org/show_bug.cgi?id=78128)
      - Implement MathML Clipboard Specification: [bug 539506](https://bugzilla.mozilla.org/show_bug.cgi?id=539506)
      - Create an EPUB reader or other math tools for FirefoxOS!
        Again, watch the video mentioned above for the
        [Samsung Galaxy Note](https://www.youtube.com/watch?v=ksBWWpbsOk0)
      - Make [FireVox](http://firevox.clcworld.net/) work in recent versions of Firefox. It seems that there was an updated version called ML-FireVox at some
      point, but the Web site is down. 
     - See also [MathML](https://developer.mozilla.org/docs/Web/MathML),
       [MathMLProject](https://developer.mozilla.org/en-US/docs/Mozilla/MathML_Project)
       [MathML:HomePage](https://wiki.mozilla.org/MathML:Home_Page).
