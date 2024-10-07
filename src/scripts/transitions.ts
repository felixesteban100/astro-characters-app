let lastPhotoId = ''

/**
 * Save the ID of the last photo we visited. This is used to set the
 * transition name of the photo we're transitioning from in astro:after-swap.
 */
function saveLastPhotoId(id: string) {
  lastPhotoId = id
}


/**
 * Creates an IntersectionObserver that sets the transition name of
 * photos in the grid when they become visible.
 *
 * This improves the performance of the page transitions considerably
 * when there is a large number of photos in the grid.
 */
document.addEventListener('astro:page-load', (e) => {
  const pathname = window.location.pathname

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const first = urlParams.get('first');

  // console.log(first)

  switch (pathname) {
    case "/characters":
      saveLastPhotoId(id || "")
      break;

    case "/random_characters":
      saveLastPhotoId("")
      break;

    case "/character":
      saveLastPhotoId(id || "")
      break;

    case "/compare":
      saveLastPhotoId(first || "")
      break;

    case "/powers":
    case "/universes":
    case "/teams":
      saveLastPhotoId("")
      break;
  }


  const photos = document.querySelectorAll('.character-image')

  // console.log(photos)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLImageElement
        // if (entry.intersectionRatio > 0) {
        //   // @ts-ignore - viewTransitionName is not in the spec yet
        //   target.style.viewTransitionName = target.id
        // } else {
        //   // @ts-ignore - viewTransitionName is not in the spec yet
        //   target.style.viewTransitionName = 'none'
        // }
        // @ts-ignore
        target.style.viewTransitionName = target.id
      })
    },
    { threshold: 0 }
  )

  // Observe each photo in the grid. When a photo is visible, set its
  // transition name. Otherwise, set it to "none".
  photos.forEach((photo) => {
    observer.observe(photo)
  })
})

/**
 * When navigating back to the home page, find the image we're transitioning
 * from and set its transition name.
 */
document.addEventListener('astro:before-preparation', () => {
  const body = document.querySelector('body')
  const loaders = document.querySelectorAll('#loader')
  const loaders_dialog = document.querySelector('#loader-dialog')
  const actionDoers = document.querySelectorAll('#actionDoer')

  if (screen.width < 800) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
    });
    anchor.classList.add("pointer-events-none")
    anchor.style.pointerEvents = 'none';  // Disable clicking
    // anchor.style.color = 'gray';  // Optional: Change color to show it's disabled
  });

  body?.classList.add('cursor-wait')
  loaders.forEach(loader => {
    loader?.classList.remove('hidden')
  })
  loaders_dialog?.classList.remove('hidden')
  actionDoers.forEach(actionDoer => {
    actionDoer?.classList.add('hidden')
    actionDoer?.classList.remove('2xl:flex')
  })
})


document.addEventListener('astro:after-swap', (e) => {
  if (!lastPhotoId) {
    return true
  }

  const photo = document.querySelector(
    '#photo-' + lastPhotoId
  ) as HTMLImageElement



  // If we find the photo we're transitioning from, set its transition name
  // and scroll it into view.
  if (photo) {
    // @ts-ignore - viewTransitionName is not in the spec yet
    photo.style.viewTransitionName = 'photo-' + lastPhotoId
    // @ts-ignore - scrollIntoViewIfNeeded is a Chrome-only method
    photo.scrollIntoViewIfNeeded
      ? // @ts-ignore - scrollIntoViewIfNeeded is a Chrome-only method
      photo.scrollIntoViewIfNeeded()
      : photo.scrollIntoView()
  }
})
