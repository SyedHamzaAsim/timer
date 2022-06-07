const args = process.argv.slice(2);


for (let i = 0; i < args.length; i++) {
  if (args[i] <= 0 || typeof args[i] !== Number) break;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, args[i] * 1000)
}