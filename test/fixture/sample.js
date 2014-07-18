// Sample use of process.env.NODE_ENV

if ( process.env.NODE_ENV === 'production' ) {
  console.error('disallowed currently!');
} else {
  console.log('thanks!');
}
