import './index.css';
import QRCode from 'qrcode';

window.addEventListener('DOMContentLoaded', main);

async function main() {
  const targetUrl = getTargetUrl();
  try {
    await drawQRCode(targetUrl);
  } catch (e) {
    showError(e);
  }
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

function showError(e: Error | string) {
  const errorEl = document.getElementById('error')!;
  errorEl.textContent = e instanceof Error ? e.message : String(e);
  errorEl.style.display = 'block';
}
