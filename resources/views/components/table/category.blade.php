<section class="section">
    <div class="row">
        <div class="col-lg-12">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"></h5>

                    <!-- Table with stripped rows -->
                    <table class="table datatable">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Name</th>
                                <th scope="col">Slug</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($categories as $category)
                                <tr>
                                    <th scope="row">{{ $loop->index + 1 }} </th>
                                    <td>{{ $category->name }} </td>
                                    <td>{{ $category->slug }} </td>
                                    <td>
                                        <a class="btn btn-sm btn-success" href="@route('admin.category.edit', $category->category_id)"><i
                                                class="bi bi-pencil-square"></i></a> <!-- edit -->
                                        {{-- <a class="btn btn-sm btn-success" href="@route('admin.category.show', $category->category_id)"><i
                                                class="bi bi-eye"></i></a> <!-- show --> --}}

                                        <form action="@route('admin.category.destroy', $category->category_id)" method="POST">
                                            @method('DELETE')
                                            @csrf
                                            <button class="btn btn-sm btn-danger" type="submit"><i
                                                    class="bi bi-trash"></i></button>
                                        </form><!--delete-->
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                    <!-- End Table with stripped rows -->

                </div>
            </div>

        </div>
    </div>
</section>
