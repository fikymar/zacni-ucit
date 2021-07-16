from django.contrib import admin
from .models import (
    CollegeArea,
    CollegeProgramme,
    EducationType,
    Title,
    EducationArea,
    PreparationType,
    SubjectType,
    OtherOption,
)


class CollegeAreaAdmin(admin.ModelAdmin):
    list_display = ("name",)


class CollegeProgrammeAdmin(admin.ModelAdmin):
    list_display = ("name", "area")
    list_select_related = ("area",)
    list_filter = ("area", "subjects")
    fields = ("area", "name", "subjects")
    filter_horizontal = ("subjects",)


class EducationTypeAdmin(admin.ModelAdmin):
    list_display = ("qualification_type", "title", "area", "preparation_type", "subject_type")
    list_filter = ("qualification_type", "title", "school_levels")
    search_fields = ("qualification_type", "title__name", "school_levels__name")
    list_select_related = ("title", "area", "preparation_type", "subject_type")
    filter_horizontal = ("school_levels",)


class TitleAdmin(admin.ModelAdmin):
    list_display = ("name", "code")


class EducationAreaAdmin(admin.ModelAdmin):
    list_display = ("name",)


class PreparationTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)


class SubjectTypeAdmin(admin.ModelAdmin):
    list_display = ("name",)


class OtherOptionAdmin(admin.ModelAdmin):
    list_display = ("name",)


admin.site.register(CollegeArea, CollegeAreaAdmin)
admin.site.register(CollegeProgramme, CollegeProgrammeAdmin)
admin.site.register(EducationType, EducationTypeAdmin)
admin.site.register(Title, TitleAdmin)
admin.site.register(EducationArea, EducationAreaAdmin)
admin.site.register(PreparationType, PreparationTypeAdmin)
admin.site.register(SubjectType, SubjectTypeAdmin)
admin.site.register(OtherOption, OtherOptionAdmin)
