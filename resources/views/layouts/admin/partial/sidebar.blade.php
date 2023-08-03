<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
            <a class="nav-link" href="@route('admin.dashboard')">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li><!-- End Dashboard Nav -->

        <!-- room  -->
        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#course-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-journal-text"></i><span>Hotel Manage</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="course-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="">
                        <i class="bi bi-circle"></i><span>Room Type</span>
                    </a>
                </li>

                <li>
                    <a href="@route('admin.category.index')">
                        <i class="bi bi-circle"></i><span>Categories</span>
                    </a>
                </li>

                 <li>
                    <a href="@route('admin.amenity.index')">
                        <i class="bi bi-circle"></i><span>Amenities</span>
                    </a>
                </li>

                <li>
                    <a href="@route('admin.complement.index')">
                        <i class="bi bi-circle"></i><span>Complement</span>
                    </a>
                </li>
            </ul>
        </li>
        <!-- room end -->
    </ul>
</aside>
