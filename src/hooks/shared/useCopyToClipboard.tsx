import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

/**
 * @usage const [copiedText, copy] = useCopyToClipboard()
 * @usage <button onClick={() => copy('A')}>A</button>
 * @returns [copiedText, copy]
 */
function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator.clipboard) {
      // execCommand 사용
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
        setCopiedText(text);
        document.execCommand('copy');
        document.execCommand('copy');

        textArea.setSelectionRange(0, 0);
        document.body.removeChild(textArea);
        document.body.removeChild(input);
        return true;
      } catch (err) {
        setCopiedText(null);
        textArea.setSelectionRange(0, 0);
        document.body.removeChild(textArea);
        return false;
      }
    } else {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        return true;
      } catch (error) {
        setCopiedText(null);
        return false;
      }
    }
  }; // Try to save to clipboard then save it in the state if worked

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
