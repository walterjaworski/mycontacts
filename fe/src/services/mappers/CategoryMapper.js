class CategoryMapper {
  // toPersistence(domainContact) {
  //   return {}
  // }

  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
