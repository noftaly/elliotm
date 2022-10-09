import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
        {
          Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                height="700"
                className={pageNumber !== (index + 1) ? 'hidden' : ''}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ),
          )
        }
      </Document>

      <div className="flex justify-center mt-5">
        <button type="button" className={"py-2 px-5 border-gray-200 border border-r-0 rounded-l-md"} disabled={pageNumber <= 1} onClick={previousPage}>
          <FontAwesomeIcon icon={faArrowLeft} color={pageNumber <= 1 ? "gray" : ''}/>
        </button>
        <p className="py-2 px-5 border-gray-200 border">
          {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button type="button" className="py-2 px-5 border-gray-200 border border-l-0 rounded-r-md" disabled={pageNumber >= numPages} onClick={nextPage}>
          <FontAwesomeIcon icon={faArrowRight} color={pageNumber >= numPages ? "gray" : ''} />
        </button>
      </div>
    </>
  );
};
