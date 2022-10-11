import React, { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import throttle from 'lodash.throttle';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [initialWidth, setInitialWidth] = useState(null);
  const pdfWrapper = useRef();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }


  const changePage = (offset) => setPageNumber(prevPageNumber => prevPageNumber + offset);
  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  useEffect(() => {
    const setPdfSize = () => {
      if (pdfWrapper?.current) {
        if (pageNumber === 1 || pageNumber === numPages) {
          setInitialWidth(pdfWrapper.current.getBoundingClientRect().width / 2);
        } else {
          setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
        }
      }
    };

    window.addEventListener('resize', throttle(setPdfSize, 200));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 200));
    };
  }, [numPages, pageNumber]);

  return (
    <div className="flex flex-col">
      <div id="pdfWrapper" className="w-[90vw] lg:w-[60vw]" ref={pdfWrapper}>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          {
            Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  width={initialWidth}
                  className={pageNumber !== (index + 1) ? 'hidden' : ''}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              ),
            )
          }
        </Document>
      </div>

      <div className="flex justify-center mt-5">
        <button
            type="button"
            className={"py-2 px-5 border-gray-200 border border-r-0 rounded-l-md"}
            disabled={pageNumber <= 1}
            onClick={previousPage}>
          <FontAwesomeIcon icon={faArrowLeft} color={pageNumber <= 1 ? "gray" : ''}/>
        </button>
        <p className="py-2 px-5 border-gray-200 border">
          {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
            type="button"
            className="py-2 px-5 border-gray-200 border border-l-0 rounded-r-md"
            disabled={pageNumber >= numPages}
            onClick={nextPage}>
          <FontAwesomeIcon icon={faArrowRight} color={pageNumber >= numPages ? "gray" : ''} />
        </button>
      </div>
    </div>
  );
};
