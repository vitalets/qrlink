import './index.css';
import QRCode from 'qrcode';

window.addEventListener('DOMContentLoaded', main);

async function main() {
  const targetUrl = getTargetUrl();
  await drawQRCode(targetUrl);
}

function getTargetUrl() {
  const urlObj = new URL(location.href);
  return urlObj.searchParams.get('url') || '';
}

async function drawQRCode(data: string) {
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  await QRCode.toCanvas(canvas, data, {
    width: Math.round(0.3 * window.innerWidth)
  });
}
