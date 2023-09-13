<script setup></script>
<template>
 <div class="product-detail">
    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-5">
                        <!--carousel-->
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="../../assets/images/backend-development.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="../../assets/images/backend-development.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="../../assets/images/backend-development.jpg" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                         <!--carousel-->
                    </div>
                    <div class="col-md-7">
                        <h2>Product Name</h2>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="prod-desc">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, omnis doloribus qui neque itaque tempora!</p>
                        </div>
                        <h2>$200</h2>
                        <div class="quantity">
                            <input type="number" >
                        </div>
                        <div class="buttons">
                            <button><i class="fa fa-shopping-bag"></i></button>
                            <button><i class="fa fa-heart"></i></button>
                            <button><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>
 </div>   
 <div class="prod-tabs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist" style="background-color: #909090;">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                </div>
            </div>
        </div>
    </div>

 </div>
</template>
<style scoped>
.product-detail{
    width: 100%;
    background-color: #fff;
}
.prod-desc p{
    display: block;
}
</style>

