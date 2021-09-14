const findBlockByAlias = alias => {
    $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias
    });
};

$('interactive-avatar__link').click(e => {
    e.preventDefailt();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const ItemToShow = findBlockByAlias(target);
    const curItem =$this.closet(".revie__item interactive-avatar")

    ItemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
})