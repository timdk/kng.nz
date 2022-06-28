import { NextPageWithLayout } from '@/types/page'
import BlogLayout from '@/layouts/blog-layout'
import Highlight from '@/components/shared/highlight'

import styles from './animated-highlight.module.scss'

const AnimatedHighlight: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <p>Scroll down</p>
      </div>
      <div className={styles.text}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque libero, consequat quis euismod eu, venenatis et est. Aliquam in mi eu
        nisl rhoncus ultrices. Phasellus pellentesque lacus felis, quis pellentesque ex hendrerit quis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin facilisis nulla id ultricies viverra. Nulla vehicula tristique felis, id efficitur ex consequat non. Phasellus vulputate
        vehicula condimentum. Etiam consequat nunc lorem, quis dictum nibh cursus vitae. Vestibulum sed luctus dolor. Phasellus posuere, dui a porttitor
        maximus, lacus dolor aliquet dui, vel luctus eros libero vel dui.</p>

        <p>Aliquam enim eros, consectetur id erat sed, commodo fermentum lectus. Mauris tincidunt ante ultrices erat vehicula, eget blandit arcu euismod.
        Proin massa nunc, <Highlight>hendrerit sollicitudin at</Highlight>, blandit ac lacus. Vivamus elit metus, venenatis non dolor non, blandit fermentum nunc.
        Nulla vitae varius nunc. Donec quam odio, eleifend eu molestie nec, sollicitudin ac orci. Curabitur nec tellus eleifend, tempus ex nec, bibendum
        enim. Nullam lacinia justo a ultricies auctor. Ut finibus turpis eget turpis aliquam, nec egestas dolor pharetra. Nam elementum tristique
        venenatis. Sed sit amet viverra quam, in posuere nibh. Quisque id nunc eget dui dignissim fermentum vitae a elit. Duis id auctor velit. Quisque
        rutrum eros fringilla lobortis cursus. Duis luctus quis purus in porta.</p>

        <p>Pellentesque dignissim ante ac ex auctor consectetur. Pellentesque ac mollis dolor. Suspendisse sollicitudin, tortor vel cursus faucibus,
        sapien sem tempus nibh, a volutpat leo orci ac nisl. Maecenas lobortis molestie lacus ac ultricies. In tempus tincidunt eros, at convallis risus
        egestas ut. Duis dapibus bibendum augue. Nunc vestibulum nibh nisi, at varius lacus tempus vel. Cras ante sem, volutpat ac malesuada vitae,
        facilisis a ligula. In consequat id felis eu sagittis. Integer auctor scelerisque dictum. Pellentesque hendrerit sagittis fermentum. Praesent
        tempus lorem ut nulla venenatis, vitae porttitor magna commodo. Suspendisse pharetra scelerisque sem eu lacinia.</p>

        <p>Aenean pulvinar felis rutrum ornare porttitor. Phasellus in dapibus lectus. Mauris faucibus, lorem non fringilla malesuada, leo dolor fermentum
        justo, ac vestibulum libero tellus at mauris. Vivamus finibus urna nisi, eget maximus magna dictum pharetra. Nam iaculis sem sit amet dui
          molestie aliquet. <Highlight>Pellentesque vehicula rhoncus leo</Highlight>, id imperdiet neque sollicitudin ac. Proin iaculis, nibh accumsan sagittis volutpat, turpis
        quam eleifend ex, non cursus neque leo ut ante. In laoreet malesuada velit vitae sagittis. Donec orci erat, fermentum non dapibus at, suscipit
        vel lorem. Sed accumsan id purus eu semper. Proin efficitur nunc at erat porttitor posuere. Aliquam posuere posuere lectus non volutpat. Proin
        congue tincidunt urna, et tristique velit tincidunt vel. Duis auctor congue libero et tempus. Vivamus non commodo erat.</p>

        <p>Sedo non venenatis lectus, vel rutrum lectus. Ut neque tortor, suscipit vel cursus a, placerat bibendum neque. <Highlight>Donec ornare sit amet lectus a
        accumsan. Vivamus vehicula dui in sem pretium lobortis. In nec orci dignissim augue tincidunt tincidunt. Pellentesque enim felis, venenatis
          aliquam finibus nec, ultricies sed risus.</Highlight> Proin vulputate nisl sit amet ultrices commodo. Nullam fringilla pellentesque nisi, sed cursus augue
        pharetra sit amet. Nullam auctor risus at risus venenatis venenatis. </p>
      </div>
    </>
  )
}

AnimatedHighlight.getLayout = (page) => (<BlogLayout>{page}</BlogLayout>)

export default AnimatedHighlight
