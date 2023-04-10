import copyToClipboard from 'copy-to-clipboard';
import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

/**
 * @usage const [copiedText, copy] = useCopyDToClipboard()
 * @usage <button onClick={() => copy('A')}>A</button>
 * @returns [copiedText, copy]
 */

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setLastCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (copyToClipboard) {
      try {
        copyToClipboard(text);
        setLastCopiedText(text);
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!navigator.clipboard) {
        console.log('THIS execCommand right!');
        const textArea = document.createElement('textarea');
        const input = document.createElement('input');
        input.setAttribute('readonly', 'true');
        input.setAttribute('value', text);
        textArea.value = text;
        document.body.appendChild(textArea);
        document.body.appendChild(input);
        textArea.select();
        input.select();
        textArea.setSelectionRange(0, 99999);
        input.setSelectionRange(0, 99999);
        try {
          document.execCommand('copy');
          setLastCopiedText(text);
        } catch (error) {
          console.log(error);
        }
        textArea.setSelectionRange(0, 0);
        document.body.removeChild(textArea);
        document.body.removeChild(input);
      } else {
        try {
          console.log('THIS navigator.clipboard right!');
          await navigator.clipboard.writeText(text);
          setLastCopiedText(text);
        } catch (error) {
          console.log(error);
        }
      }
    }
    return true;
  };

  return [copiedText, copy];
}
export default useCopyToClipboard;
// usage
// import { useCopyToClipboard } from 'usehooks-ts'

// export default function Component() {
//   const [value, copy] = useCopyToClipboard()
//   return (
//     <>
//       <h1>Click to copy:</h1>
//       <div style={{ display: 'flex' }}>
//         <button onClick={() => copy('A')}>A</button>
//         <button onClick={() => copy('B')}>B</button>
//         <button onClick={() => copy('C')}>C</button>
//       </div>
//       <p>Copied value: {value ?? 'Nothing is copied yet!'}</p>
//     </>
//   )
// }
