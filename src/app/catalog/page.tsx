import {memo} from 'react';
import {redirect, RedirectType} from 'next/navigation';

const CatalogPage = memo(function CatalogPage() {
    return redirect('/catalog/new', RedirectType.push);
});

export default CatalogPage;
