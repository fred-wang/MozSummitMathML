PDFLATEX=pdflatex
LATEXML=latexml
LATEXMLPOST=latexmlpost
LATEXMLC=latexmlc

help:
	@echo
	@echo "make all"
	@echo "  Generate everything."
	@echo
	@echo "make pdf"
	@echo "  Generate the PDF version."
	@echo
	@echo "make html"
	@echo "  Generate the HTML version."
	@echo
	@echo "make html-mathjax"
	@echo "  Generate the HTML version with MathJax fallback."
	@echo
	@echo "make epub"
	@echo "  Generate the EPUB version."
	@echo
	@echo "make clean"
	@echo "  Remove intermediary files."
	@echo
	@echo "make distclean"
	@echo "  Remove all generated content."
	@echo

all: pdf html html-mathjax epub

pdf:
# Classical pdflatex command. Run twice to generate the references correctly.
	mkdir pdf
	$(PDFLATEX) -output-directory pdf thesis.tex
	$(PDFLATEX) -output-directory pdf thesis.tex

thesis.xml:
# LaTeXML, main procesing.
	$(LATEXML) --dest thesis.xml thesis.tex

html: thesis.xml
# LaTeXML, HTML output.
	mkdir -p html
	$(LATEXMLPOST) --dest html/thesis.html --format=html5 --splitat=section thesis.xml

html-mathjax: thesis.xml
# LaTeXML, HTML output with MathJax fallback.
	mkdir -p html-mathjax;
	cd html-mathjax; \
	$(LATEXMLPOST) --dest thesis.html --format=html5 --splitat=section --javascript=../mathjax.js ../thesis.xml

epub: thesis.xml
# LaTeXML, EPUB output.
	mkdir -p epub;
	cd epub; \
	$(LATEXMLC) --dest thesis.epub --splitat=section ../thesis.tex

clean:
# Cleaning intermediary files.
	rm -rf pdf/*.aux pdf/*.log */LaTeXML.cache *.pdf thesis.xml

distclean: clean
# Cleaning the directory.
	rm -rf pdf html html-mathjax epub
